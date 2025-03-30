'use client';
import { useState, useEffect } from 'react';
import { Layout, ConfigProvider, theme } from 'antd';
import SearchCity from '../components/SearchCity';
import WeatherList from '../components/WeatherList';
import ThemeToggle from '../components/ThemeToggle';
import { type City } from '../data/mockCities';
import styles from './page.module.css';

const { Header, Content } = Layout;

export default function Home() {
  const [cities, setCities] = useState<City[]>([]);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const savedCities = localStorage.getItem('savedCities');
    if (savedCities) {
      setCities(JSON.parse(savedCities));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('savedCities', JSON.stringify(cities));
  }, [cities]);

  const handleAddCity = (city: City) => {
    if (!cities.find(c => c.id === city.id)) {
      setCities([...cities, city]);
    }
  };

  const handleRemoveCity = (cityId: string) => {
    setCities(cities.filter(city => city.id !== cityId));
  };

  return (
    <ConfigProvider
      theme={{
        algorithm: isDarkMode ? theme.darkAlgorithm : theme.defaultAlgorithm,
      }}
    >
      <Layout className={styles.layout}>
        <Header className={styles.header}>
          <h1 className={styles.title}>ClimaApp</h1>
          <ThemeToggle isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
        </Header>
        <Content className={styles.content}>
          <SearchCity onCitySelect={handleAddCity} />
          <WeatherList cities={cities} onRemoveCity={handleRemoveCity} />
        </Content>
      </Layout>
    </ConfigProvider>
  );
} 