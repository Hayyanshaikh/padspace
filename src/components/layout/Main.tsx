import React from 'react';
import { Routes, Route } from 'react-router-dom';
import routes from './Routes.js';

const Main: React.FC = () => {

  return (
    <div className="main">
      <Routes>
        {routes.map((route, key) => (
          <Route
            key={key}
            path={route.path}
            element={route.element}
          />
        ))}
      </Routes>
    </div>
  );
};

export default Main;