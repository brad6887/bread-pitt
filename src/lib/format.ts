export function formatBakeDateRange(started: string, completed: string) {
  const start = new Date(`${started}T00:00:00`);
  const end = new Date(`${completed}T00:00:00`);

  const options: Intl.DateTimeFormatOptions = {
    month: "long",
    day: "numeric",
    year: "numeric",
  };

  if (started === completed) {
    return start.toLocaleDateString("en-US", options);
  }

  const startText = start.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
  });

  const endText = end.toLocaleDateString("en-US", options);

  return `${startText}–${endText}`;
}
