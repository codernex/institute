interface ICourse {
  name: string;
  icon: JSX;
  description: string;
}

interface ICourseData {
  name: string;
  title: string;
  tag: string[];
  imgUrl?: 'string';
  courseDuration: string;
  courseContent: {
    lecture: string;
    project: string;
  };
  overview: string;
}
declare module '*.jpg';
declare module '*.png';

interface IForm {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
}
