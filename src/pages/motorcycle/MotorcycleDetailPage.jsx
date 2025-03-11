import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import MotorcycleDetail from '@/components/motorcycle/MotorcycleDetail';
import { motorcycles } from '@/data/motorcycles';
import { cn } from '@/lib/utils';

/**
 * @component ErrorMessage
 * @description Displays an error message when motorcycle data is not found
 */
const ErrorMessage = React.memo(() => (
  <div className={cn(
    "min-h-[60vh]",
    "flex flex-col items-center justify-center",
    "p-8 text-center"
  )}>
    <h1 className="text-2xl font-bold mb-4">Model Bulunamadı</h1>
    <p className="text-muted-foreground mb-6">
      Aradığınız motosiklet modelini bulamadık. Lütfen doğru sayfada olduğunuzdan emin olun.
    </p>
  </div>
));

ErrorMessage.displayName = 'ErrorMessage';

/**
 * @component MotorcycleDetailPage
 * @description Page component for displaying detailed motorcycle information
 */
const MotorcycleDetailPage = () => {
  const { brand, model } = useParams();

  // Get motorcycle data from our data store
  const motorcycleData = motorcycles[brand]?.[model];

  // If no data found, show error message
  if (!motorcycleData) {
    return <ErrorMessage />;
  }

  // Update document title for SEO
  React.useEffect(() => {
    document.title = `${motorcycleData.name} | Daric Motosiklet`;
    return () => {
      document.title = 'Daric Motosiklet';
    };
  }, [motorcycleData.name]);

  return <MotorcycleDetail model={motorcycleData} />;
};

export default MotorcycleDetailPage;
