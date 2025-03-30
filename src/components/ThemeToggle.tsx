import { Switch } from 'antd';
import { BulbOutlined, BulbFilled } from '@ant-design/icons';
import styles from './ThemeToggle.module.css';

export default function ThemeToggle({ isDarkMode, setIsDarkMode }) {
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