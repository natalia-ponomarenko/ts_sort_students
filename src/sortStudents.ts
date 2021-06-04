'use strict';

type Student = {
  name: string,
  surname: string,
  age: number,
  married: boolean,
  grades: number[],
};

export enum SortField {
  Name,
  Surname,
  Age,
  Married,
  AverageGrade,
};

type SortOrder = 'asc' | 'desc';

export function sortStudents(
  students: Student[],
  sortBy: SortField,
  order: SortOrder
): Student[] {
  let sortedStudents: Student[];
  const copyStudents = [...students];

  switch (sortBy) {
    case SortField.Name:
      sortedStudents = copyStudents.sort((previous, next) => {
        return order === 'asc'
          ? previous.name.localeCompare(next.name)
          : next.name.localeCompare(previous.name);
      });
      break;
    case SortField.Surname:
      sortedStudents = copyStudents.sort((previous, next) => {
        return order === 'asc'
          ? previous.surname.localeCompare(next.surname)
          : next.surname.localeCompare(previous.surname);
      });
      break;
    case SortField.Married:
      sortedStudents = copyStudents.sort((previous, next) => {
        return order === 'asc'
          ? String(previous.married).localeCompare(String(next.married))
          : String(next.married).localeCompare(String(previous.married));
      });
      break;
    case SortField.Age:
      sortedStudents = copyStudents.sort((previous, next) => {
        return order === 'asc'
          ? previous.age - next.age
          : next.age - previous.age;
      });
      break;
    case SortField.AverageGrade:
      sortedStudents = copyStudents.sort((previous, next) => {
        const prevAverageGrade = previous.grades.reduce(
          (a, b) => (a + b)
        ) / previous.grades.length;
        const nextAverageGrade = next.grades.reduce(
          (a, b) => (a + b)
        ) / next.grades.length;

        return order === 'asc'
          ? prevAverageGrade - nextAverageGrade
          : nextAverageGrade - prevAverageGrade;
      });
      break;
    default:
      return [];
  }

  return sortedStudents;
}
