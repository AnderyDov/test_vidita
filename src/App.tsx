import './App.css';
import { useAppSelector } from './store/customHooks'; // Кастомный хук редакса для управления состоянием
import ToggleTheme from './components/ToggleTheme'; // Компонент переключатель темы
import LinkToGithub from './components/LInkToGithub'; // Компонент ссылка на git репозиторий проекта
import Table from './components/Table';

export default function App() {
  const theme = useAppSelector((state) => state.app.theme); // Состояние темы

  const out = (
    <div
      className='flex flex-col h-full items-center p-10'
      data-theme={theme ? 'luxury' : 'fantasy'}
      data-testid='t'
    >
      TABLE PRODS
      <ToggleTheme />
      <Table />
      <LinkToGithub />
    </div>
  );

  return out;
}
