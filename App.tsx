
import React, { useState, useCallback, useEffect } from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Layout } from './components/Layout';
import { HomePage } from './pages/HomePage';
import { ExploreSpecializationsPage } from './pages/ExploreSpecializationsPage';
import { SpecializationDetailPage } from './pages/SpecializationDetailPage';
import { MyInterestsPage } from './pages/MyInterestsPage';
import { ParentsPage } from './pages/ParentsPage';
import { CalendarPage } from './pages/CalendarPage';
import { NewsPage } from './pages/NewsPage';
import { APP_ROUTES, MOCK_SPECIALIZATIONS } from './constants';
import { Specialization } from './types';

const App: React.FC = () => {
  const [interestedIds, setInterestedIds] = useState<string[]>(() => {
    const savedInterests = localStorage.getItem('interestedSpecializationIds');
    return savedInterests ? JSON.parse(savedInterests) : [];
  });

  useEffect(() => {
    localStorage.setItem('interestedSpecializationIds', JSON.stringify(interestedIds));
  }, [interestedIds]);

  const toggleInterest = useCallback((specializationId: string) => {
    setInterestedIds(prevIds =>
      prevIds.includes(specializationId)
        ? prevIds.filter(id => id !== specializationId)
        : [...prevIds, specializationId]
    );
  }, []);

  const interestedSpecializations: Specialization[] = MOCK_SPECIALIZATIONS.filter(spec => interestedIds.includes(spec.id));

  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout interestedCount={interestedIds.length} />}>
          <Route index element={<Navigate to={APP_ROUTES.HOME} replace />} />
          <Route path={APP_ROUTES.HOME} element={<HomePage interestedSpecializations={interestedSpecializations} />} />
          <Route 
            path={APP_ROUTES.EXPLORE} 
            element={
              <ExploreSpecializationsPage 
                specializations={MOCK_SPECIALIZATIONS} 
                interestedIds={interestedIds}
                toggleInterest={toggleInterest}
              />
            } 
          />
          <Route 
            path={`${APP_ROUTES.SPECIALIZATION}/:id`} 
            element={
              <SpecializationDetailPage 
                specializations={MOCK_SPECIALIZATIONS}
                interestedIds={interestedIds}
                toggleInterest={toggleInterest}
              />
            } 
          />
          <Route 
            path={APP_ROUTES.MY_INTERESTS} 
            element={
              <MyInterestsPage 
                interestedSpecializations={interestedSpecializations}
                toggleInterest={toggleInterest}
              />
            } 
          />
          <Route path={APP_ROUTES.PARENTS_PANEL} element={<ParentsPage />} />
          <Route path={APP_ROUTES.CALENDAR} element={<CalendarPage />} />
          <Route path={APP_ROUTES.NEWS} element={<NewsPage />} />
          <Route path="*" element={<Navigate to={APP_ROUTES.HOME} replace />} />
        </Route>
      </Routes>
    </HashRouter>
  );
};

export default App;
    