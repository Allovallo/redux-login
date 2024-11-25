import { Helmet } from 'react-helmet';
import { TaskEditor } from '../components/TaskEditor/TaskEditor';

export default function Tasks() {
  return (
    <>
      <Helmet>
        <title>Ваші завдання</title>
      </Helmet>
      <TaskEditor />
      <div></div>
    </>
  );
}
