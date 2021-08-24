// Types
import { FormInputProps } from '../FormInput.types';
import { ShallowSubmissionEntryInterface } from '../../../../../interfaces/TimeEntry';
import { SelectOptionsList } from '../../../../lib/SemanticUiService/SemanticUiService';

export interface TaskProps extends FormInputProps{
    taskId: ShallowSubmissionEntryInterface['task_id'];
    tasks: SelectOptionsList;
}