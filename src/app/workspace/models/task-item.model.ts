import { ITask } from 'src/app/api/models/api.model';
import { IFileItem } from './file-item.model';

export interface ITaskItem extends ITask {
  id: string;
  files: IFileItem[];
}
