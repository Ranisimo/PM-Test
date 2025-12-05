import React from "react";
import Card from "./Card";

export type User = {
  initials: string;
  name: string;
  description: string;
  source: string;
};

interface CardGridProps {
  users: User[];
}

export default function CardGrid({ users }: CardGridProps) {
  // Split users into up to 3 columns, max 3 per column
  const columns: User[][] = [[], [], []];
  users.forEach((user, idx) => {
    columns[Math.floor(idx / 3)].push(user);
  });

  return (
    <div style={{ display: "flex", gap: "30px" }}>
      {columns.map((col, colIdx) =>
        col.length > 0 ? (
          <div key={colIdx} className="card-container" style={{ display: "flex", flexDirection: "column", gap: "30px" }}>
            {col.map((user) => (
              <Card key={user.initials} {...user} />
            ))}
          </div>
        ) : null
      )}
    </div>
  );
}
