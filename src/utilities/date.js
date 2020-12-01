// @ts-check
/* eslint-disable import/prefer-default-export */
export const convertToTime = (dateString) => {
  const date = new Date(dateString);
  const hours = date.getHours().toString().padStart(2, '0');
  const minutes = date.getMinutes().toString().padStart(2, '0');
  return `${hours}:${minutes}`;
};

export const convertToDuration = (minutes) => {
  const hours = Math.floor(minutes / 60);
  const restMinutes = minutes - hours * 60;
  const totalHours = hours ? `${hours}ч` : '';
  const totalMinutes = restMinutes ? `${restMinutes}м` : '';
  return `${totalHours} ${totalMinutes}`.trim();
};
