"use client";

import { useEffect, useRef, useState } from "react";

interface ContributionLevel {
  count: number;
  color: string;
}

const LEVELS: ContributionLevel[] = [
  { count: 0, color: "var(--bg-subtle)" },
  { count: 1, color: "rgba(57,211,83,0.15)" },
  { count: 2, color: "rgba(57,211,83,0.35)" },
  { count: 3, color: "rgba(57,211,83,0.55)" },
  { count: 4, color: "rgba(57,211,83,0.75)" },
  { count: 5, color: "rgba(57,211,83,1.0)" },
];

const WEEKDAYS = ["", "Mon", "", "Wed", "", "Fri", ""];
const TOTAL_WEEKS = 53;
const CELL_SIZE = 13;
const CELL_GAP = 3;
const LABEL_WIDTH = 36;
const MONTH_HEIGHT = 18;

function seededRandom(seed: number) {
  let s = seed;
  return () => {
    s = (s * 16807) % 2147483647;
    return (s - 1) / 2147483646;
  };
}

function generateContributions(
  totalWeeks: number,
  density: number
): number[][] {
  const rand = seededRandom(42);
  const grid: number[][] = [];

  for (let week = 0; week < totalWeeks; week++) {
    const dayRow: number[] = [];
    for (let day = 0; day < 7; day++) {
      const r = rand();
      // Natural pattern — more activity in recent weeks, less in past
      const weekFactor = 0.4 + (week / totalWeeks) * 0.6;
      const adjustedDensity = density * weekFactor;

      if (r < adjustedDensity * 0.15) {
        // Level 5 (rare — very high activity)
        dayRow.push(5);
      } else if (r < adjustedDensity * 0.3) {
        // Level 4
        dayRow.push(4);
      } else if (r < adjustedDensity * 0.5) {
        // Level 3
        dayRow.push(3);
      } else if (r < adjustedDensity * 0.65) {
        // Level 2
        dayRow.push(2);
      } else if (r < adjustedDensity * 0.78) {
        // Level 1 (low)
        dayRow.push(1);
      } else {
        dayRow.push(0);
      }
    }
    grid.push(dayRow);
  }
  return grid;
}

const MONTHS = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

function getMonthLabels(totalWeeks: number) {
  const labels: { week: number; label: string }[] = [];
  // Simulate starting from ~January
  const startMonth = 0; // January
  for (let w = 0; w < totalWeeks; w++) {
    const monthIndex = (startMonth + Math.floor((w * 7) / 30)) % 12;
    const prevMonthIndex =
      (startMonth + Math.floor(((w - 1) * 7) / 30)) % 12;
    if (monthIndex !== prevMonthIndex || w === 0) {
      labels.push({ week: w, label: MONTHS[monthIndex] });
    }
  }
  return labels;
}

export function ContributionChart() {
  const contributions = generateContributions(TOTAL_WEEKS, 0.55);
  const monthLabels = getMonthLabels(TOTAL_WEEKS);
  const [visibleWeeks, setVisibleWeeks] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const svgWidth =
    LABEL_WIDTH + TOTAL_WEEKS * (CELL_SIZE + CELL_GAP) + 8;
  const svgHeight = MONTH_HEIGHT + 7 * (CELL_SIZE + CELL_GAP) + 16;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          let week = 0;
          intervalRef.current = setInterval(() => {
            week++;
            setVisibleWeeks(week);
            if (week >= TOTAL_WEEKS && intervalRef.current) {
              clearInterval(intervalRef.current);
              intervalRef.current = null;
            }
          }, 20);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) observer.observe(containerRef.current);
    return () => {
      observer.disconnect();
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
  }, []);

  return (
    <div ref={containerRef} className="w-full overflow-x-auto scrollbar-none">
      <svg
        width={svgWidth}
        height={svgHeight}
        viewBox={`0 0 ${svgWidth} ${svgHeight}`}
        className="min-w-[720px]"
        role="img"
        aria-label="GitHub contribution graph showing 53 weeks of contribution activity"
      >
        {/* Month labels */}
        {monthLabels.map(({ week, label }) => (
          <text
            key={`month-${week}`}
            x={LABEL_WIDTH + week * (CELL_SIZE + CELL_GAP)}
            y={MONTH_HEIGHT - 4}
            fill="var(--text-3)"
            fontSize="10"
            fontFamily="system-ui"
            fontWeight="500"
          >
            {label}
          </text>
        ))}

        {/* Day labels */}
        {WEEKDAYS.map((day, i) =>
          day ? (
            <text
              key={`day-${i}`}
              x={0}
              y={MONTH_HEIGHT + i * (CELL_SIZE + CELL_GAP) + CELL_SIZE - 2}
              fill="var(--text-3)"
              fontSize="10"
              fontFamily="system-ui"
            >
              {day}
            </text>
          ) : null
        )}

        {/* Contribution cells */}
        {contributions.map((week, weekIdx) =>
          week.map((level, dayIdx) => {
            const isVisible = weekIdx < visibleWeeks;
            const x = LABEL_WIDTH + weekIdx * (CELL_SIZE + CELL_GAP);
            const y = MONTH_HEIGHT + dayIdx * (CELL_SIZE + CELL_GAP);
            const color = LEVELS[Math.min(level, LEVELS.length - 1)]?.color ?? LEVELS[0].color;

            return (
              <rect
                key={`${weekIdx}-${dayIdx}`}
                x={x}
                y={y}
                width={CELL_SIZE}
                height={CELL_SIZE}
                rx="3"
                ry="3"
                fill={color}
                stroke="none"
                opacity={isVisible ? 1 : 0}
                style={{
                  transition: `opacity 0.3s ease, fill 0.2s ease`,
                  transitionDelay: isVisible ? `${weekIdx * 10}ms` : "0ms",
                }}
              >
                <title>
                  {level === 0
                    ? "No contributions"
                    : `${level * 3 + 1}–${level * 3 + 6} contributions`}{" "}
                  on day {dayIdx + 1}, week {weekIdx + 1}
                </title>
              </rect>
            );
          })
        )}
      </svg>

      {/* Legend */}
      <div
        className="flex items-center gap-2 mt-4 justify-end text-xs text-[var(--text-3)]"
        style={{ paddingLeft: LABEL_WIDTH }}
      >
        <span>Less</span>
        {[0, 1, 2, 3, 4].map((level) => (
          <div
            key={level}
            className="w-3 h-3 rounded-sm"
            style={{
              background:
                LEVELS[Math.min(level, LEVELS.length - 1)]?.color ??
                LEVELS[0].color,
            }}
          />
        ))}
        <span>More</span>
      </div>
    </div>
  );
}
