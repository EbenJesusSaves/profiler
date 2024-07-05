export function formatDate(dateString: string) {
  if (!dateString) return;
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const date = new Date(dateString);
  const day = new Intl.DateTimeFormat("en-US", { day: "2-digit" })?.format(
    date
  );
  const monthYear = new Intl.DateTimeFormat("en-US", options)?.format(date);

  let suffix = "th";
  if (day === "01" || day === "21" || day === "31") {
    suffix = "st";
  } else if (day === "02" || day === "22") {
    suffix = "nd";
  } else if (day === "03" || day === "23") {
    suffix = "rd";
  }

  return ` ${monthYear}`;
}

export function getInitials(name: string) {
  return name
    .split(" ")
    .map((word) => word[0].toUpperCase())
    .join("");
}

export function getCurrentDateFormatted() {
  const months = [
    "January",
    "Feb",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "Sept",
    "Oct",
    "Nov",
    "Dec",
  ];
  const currentDate = new Date();
  const day = currentDate.getDate();
  const monthIndex = currentDate.getMonth();
  const year = currentDate.getFullYear();

  return `${day} ${months[monthIndex]}, ${year}`;
}
