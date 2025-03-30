import { Row, Col, Card } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';
import { type City } from '../data/mockCities';
import styles from './WeatherList.module.css';

interface WeatherListProps {
  cities: City[];
  onRemoveCity: (cityId: string) => void;
}

export default function WeatherList({ cities, onRemoveCity }: WeatherListProps) {
  const getWeatherIcon = (iconCode: string) => {
    return `http://openweathermap.org/img/w/${iconCode}.png`;
  };

  return (
    <Row gutter={[16, 16]}>
      {cities.map(city => (
        <Col xs={24} sm={12} md={8} lg={6} key={city.id}>
          <Card
            className={styles.weatherCard}
            title={`${city.name}, ${city.country}`}
            extra={
              <DeleteOutlined
                onClick={() => onRemoveCity(city.id)}
                className={styles.deleteIcon}
              />
            }
          >
            <div className={styles.temperature}>
              {Math.round(city.weather.temp)}°C
            </div>
            <div className={styles.weatherInfo}>
              <img
                src={getWeatherIcon(city.weather.icon)}
                alt={city.weather.description}
              />
              <p>{city.weather.description}</p>
            </div>
            <div className={styles.details}>
              <p>Humedad: {city.weather.humidity}%</p>
              <p>Viento: {city.weather.windSpeed} m/s</p>
            </div>
          </Card>
        </Col>
      ))}
    </Row>
  );
} 