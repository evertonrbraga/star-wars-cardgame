export const capitalize = text => text.charAt(0).toUpperCase() + text.slice(1);

export const fix = attribute => {
  switch (attribute) {
    case "Jabba Desilijic Tiure":
      return "Jabba the Hutt";
      break;
    case "Wicket Systri Warrick":
      return "Wicket Warrick";
      break;
    case "Bail Prestor Organa":
      return "Bail Organa";
      break;
    case "hermaphrodite":
      return "n/a";
      break;
    case "unknown":
      return "n/a";
      break;
    default:
      return attribute;
  }
};
