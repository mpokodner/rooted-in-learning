"use client";

import Link from "next/link";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import type { ToolkitResourceCard } from "@/sanity/lib/types";

const typeLabels: Record<string, { emoji: string; label: string }> = {
  video: { emoji: "🎬", label: "Video Tutorial" },
  howto: { emoji: "📋", label: "How-To Guide" },
  download: { emoji: "📥", label: "Download" },
  review: { emoji: "⭐", label: "Tool Review" },
};

const difficultyStyles: Record<string, { bg: string; color: string }> = {
  beginner: { bg: "rgba(168, 184, 154, 0.2)", color: "var(--earth-dark)" },
  intermediate: {
    bg: "rgba(213, 163, 114, 0.2)",
    color: "var(--terracotta-dark)",
  },
  advanced: { bg: "rgba(176, 89, 49, 0.2)", color: "var(--terracotta-dark)" },
};

function formatDate(dateString: string) {
  return new Date(dateString).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

function formatGrade(g: string) {
  if (g === "all") return "All Grades";
  return `Grades ${g.toUpperCase()}`;
}

function StarRating({ rating }: { rating: number }) {
  return (
    <span style={{ display: "inline-flex", gap: "2px" }}>
      {[1, 2, 3, 4, 5].map((i) => (
        <span
          key={i}
          style={{ color: i <= rating ? "#facc15" : "var(--border-greige)" }}
        >
          ★
        </span>
      ))}
    </span>
  );
}

export default function ToolkitCard({
  resource,
}: {
  resource: ToolkitResourceCard;
}) {
  const typeInfo = typeLabels[resource.resourceType] ?? typeLabels.howto;

  return (
    <Link
      href={`/learn/teacher-toolkit/${resource.slug.current}`}
      className="group"
      style={{
        display: "block",
        borderRadius: "0.75rem",
        border: "1px solid var(--border-beige)",
        backgroundColor: "var(--white)",
        overflow: "hidden",
        transition: "box-shadow 0.2s ease",
        textDecoration: "none",
      }}
      onMouseEnter={(e) =>
        (e.currentTarget.style.boxShadow =
          "0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -4px rgba(0,0,0,0.1)")
      }
      onMouseLeave={(e) => (e.currentTarget.style.boxShadow = "none")}
    >
      {/* Image */}
      {resource.featuredImage?.asset && (
        <div
          style={{
            position: "relative",
            aspectRatio: "16 / 9",
            overflow: "hidden",
          }}
        >
          <Image
            src={urlFor(resource.featuredImage)
              .width(600)
              .height(340)
              .quality(80)
              .url()}
            alt={resource.featuredImage.alt || resource.title}
            width={600}
            height={340}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              transition: "transform 0.3s ease",
            }}
            className="group-hover:scale-105"
          />
          {/* Duration badge (video only) */}
          {resource.resourceType === "video" && resource.videoDuration && (
            <span
              style={{
                position: "absolute",
                bottom: "0.5rem",
                right: "0.5rem",
                backgroundColor: "rgba(0,0,0,0.7)",
                color: "var(--white)",
                borderRadius: "0.25rem",
                padding: "0.125rem 0.5rem",
                fontSize: "0.75rem",
              }}
            >
              {resource.videoDuration}
            </span>
          )}
        </div>
      )}

      <div style={{ padding: "1.25rem" }}>
        {/* Type badge (always inline in content area) */}
        <span
          style={{
            display: "inline-block",
            backgroundColor: "var(--beige-bg)",
            borderRadius: "0.375rem",
            padding: "0.125rem 0.5rem",
            fontSize: "0.75rem",
            fontWeight: 500,
            color: "var(--text-dark)",
            marginBottom: "0.5rem",
          }}
        >
          {typeInfo.emoji} {typeInfo.label}
        </span>

        {/* Pillar badge */}
        {resource.contentPillar && (
          <span
            style={{
              display: "inline-block",
              borderRadius: "9999px",
              padding: "0.125rem 0.75rem",
              fontSize: "0.75rem",
              fontWeight: 500,
              color: "var(--white)",
              backgroundColor: resource.contentPillar.color || "var(--earth)",
              marginBottom: "0.75rem",
            }}
          >
            {resource.contentPillar.title}
          </span>
        )}

        {/* Title */}
        <h3
          style={{
            fontFamily: "var(--font-heading)",
            color: "var(--text-black)",
            fontSize: "1.125rem",
            fontWeight: 600,
            marginBottom: "0.5rem",
            transition: "color 0.2s ease",
          }}
          className="group-hover:text-(--earth)!"
        >
          {resource.title}
        </h3>

        {/* Excerpt */}
        {resource.excerpt && (
          <p
            style={{
              color: "var(--text-muted)",
              fontSize: "0.875rem",
              display: "-webkit-box",
              WebkitLineClamp: 2,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
              margin: "0 0 0.75rem",
            }}
          >
            {resource.excerpt}
          </p>
        )}

        {/* Grade + difficulty + rating row */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "0.375rem",
            alignItems: "center",
          }}
        >
          {resource.gradeLevel?.map((g) => (
            <span
              key={g}
              style={{
                borderRadius: "9999px",
                backgroundColor: "var(--beige-bg)",
                padding: "0.125rem 0.5rem",
                fontSize: "0.75rem",
                color: "var(--text-muted)",
              }}
            >
              {formatGrade(g)}
            </span>
          ))}
          {resource.difficultyLevel && (
            <span
              style={{
                borderRadius: "9999px",
                padding: "0.125rem 0.5rem",
                fontSize: "0.75rem",
                fontWeight: 500,
                backgroundColor:
                  difficultyStyles[resource.difficultyLevel]?.bg ||
                  "var(--beige-bg)",
                color:
                  difficultyStyles[resource.difficultyLevel]?.color ||
                  "var(--text-muted)",
              }}
            >
              {resource.difficultyLevel.charAt(0).toUpperCase() +
                resource.difficultyLevel.slice(1)}
            </span>
          )}
          {resource.resourceType === "review" && resource.toolRating && (
            <StarRating rating={resource.toolRating} />
          )}
        </div>
      </div>

      {/* Footer */}
      <div
        style={{
          borderTop: "1px solid var(--border-beige)",
          padding: "0.75rem 1.25rem",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {resource.author && (
          <span style={{ fontSize: "0.75rem", color: "var(--text-light)" }}>
            {resource.author.name}
          </span>
        )}
        <span style={{ fontSize: "0.75rem", color: "var(--text-light)" }}>
          {formatDate(resource.publishedAt)}
        </span>
      </div>
    </Link>
  );
}
