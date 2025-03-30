import { Switch } from 'antd';
import { BulbOutlined, BulbFilled } from '@ant-design/icons';
import styles from './ThemeToggle.module.css';

interface ThemeToggleProps {
  isDarkMode: boolean;
  setIsDarkMode: (isDark: boolean) => void;
}

export default function ThemeToggle({ isDarkMode, setIsDarkMode }: ThemeToggleProps) {
  return (
    <Switch
      className={styles.themeToggle}
      checked={isDarkMode}
      onChange={setIsDarkMode}
      checkedChildren={<BulbFilled />}
      unCheckedChildren={<BulbOutlined />}
    />
  );
}