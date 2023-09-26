export class UserDto {
  id: number;
  name: string;
  email: string;
  mobileNumber: string;
  task?: TaskDto;
}

export class TaskDto {
  id?: number;
  title: string;
  description: string;
  state: string;
  duration: string;
  tags: string;
  times: string;
}
