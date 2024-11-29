import { Helmet } from 'react-helmet';
import { TaskEditor } from '../components/TaskEditor/TaskEditor';
import { TaskList } from '../components/TaskList/TaskList';

export default function Tasks() {
  return (
    <>
      <Helmet>
        <title>Ваші завдання</title>
      </Helmet>
      <TaskEditor />
      <div></div>
      <TaskList />
    </>
  );
}
