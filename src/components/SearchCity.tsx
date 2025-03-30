import { useState, useCallback } from 'react';
import { AutoComplete, Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import { searchCities, type City } from '../data/mockCities';
import styles from './SearchCity.module.css';

interface SearchCityProps {
  onCitySelect: (city: City) => void;
}

export default function SearchCity({ onCitySelect }: SearchCityProps) {
  const [options, setOptions] = useState<{ value: string; label: string; city: City }[]>([]);

  const handleSearch = (query: string) => {
    const cities = searchCities(query);
    const searchOptions = cities.map(city => ({
      value: `${city.name}, ${city.country}`,
      label: `${city.name}, ${city.country}`,
      city: city
    }));
    setOptions(searchOptions);
  };

  const handleSelect = (_value: string, option: { city: City }) => {
    onCitySelect(option.city);
  };

  return (
    <div className={styles.searchContainer}>
      <AutoComplete
        options={options}
        onSelect={handleSelect}
        onSearch={handleSearch}
        className={styles.autoComplete}
      >
        <Input
          size="large"
          placeholder="Buscar ciudad..."
          prefix={<SearchOutlined />}
        />
      </AutoComplete>
    </div>
  );
} 