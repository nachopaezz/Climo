# Climo ☁️

Aplicación del clima desarrollada con React, Next.js y Ant Design que permite buscar y visualizar el clima de diferentes ciudades del mundo.

## Características 🌟

- Búsqueda de ciudades en tiempo real
- Visualización del clima actual con detalles como:
  - Temperatura
  - Descripción del clima
  - Humedad
  - Velocidad del viento
- Diseño responsivo
- Modo oscuro/claro
- Persistencia de datos en localStorage
- Interfaz moderna con Ant Design
- Base de datos simulada con 50 ciudades del mundo

## Nota sobre los datos 📝

Esta aplicación actualmente utiliza datos simulados de 50 ciudades del mundo como ejemplo. En un entorno de producción, se recomienda integrar datos reales del clima utilizando APIs públicas como:
- [OpenWeatherMap](https://openweathermap.org/api)
- [WeatherAPI](https://www.weatherapi.com/)
- [Tomorrow.io](https://www.tomorrow.io/)
- [AccuWeather](https://developer.accuweather.com/)

La estructura del proyecto está diseñada para facilitar la integración de cualquier fuente de datos real simplemente modificando el archivo `src/data/mockCities.ts`.

## Tecnologías Utilizadas 🛠️

- React 18
- Next.js 13
- TypeScript
- Ant Design
- CSS Modules

## Instalación 🚀

1. Clona el repositorio:
```bash
git clone https://github.com/TU_USUARIO/climapp.git
```

2. Instala las dependencias:
```bash
cd climapp
npm install
```

3. Inicia el servidor de desarrollo:
```bash
npm run dev
```

4. Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

## Uso 📱

1. Escribe el nombre de una ciudad en el campo de búsqueda
2. Selecciona una ciudad de las sugerencias
3. La ciudad se agregará a tu lista con la información del clima
4. Puedes eliminar ciudades haciendo clic en el ícono de eliminar
