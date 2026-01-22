import { useParams, Navigate } from "react-router-dom";
import { motion } from "motion/react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { ServiceHero } from "../components/service/ServiceHero";
import { ServiceSearchNav } from "../components/service/ServiceSearchNav";
import { ServiceOverview } from "../components/service/ServiceOverview";
import { ServiceFeatures } from "../components/service/ServiceFeatures";
import { ServiceProcess } from "../components/service/ServiceProcess";
import { ServiceStats } from "../components/service/ServiceStats";
import { ServiceSuccess } from "../components/service/ServiceSuccess";
import { ServiceCTA } from "../components/service/ServiceCTA";
import { getServiceBySlug } from "../data/servicesData";
import { useEffect } from "react";

export function ServicePage() {
  const { slug } = useParams<{ slug: string }>();
  
  // Get service data by slug
  const service = slug ? getServiceBySlug(slug) : undefined;

  // Scroll to top on mount or slug change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  // If service not found, redirect to home
  if (!service) {
    return <Navigate to="/" replace />;
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen flex flex-col bg-[#0a0a0a]"
    >
      <Header />
      
      {/* Hero Section */}
      <ServiceHero data={service.hero} color={service.color} />
      
      {/* Overview Section */}
      {service.overview && (
        <ServiceOverview data={service.overview} color={service.color} />
      )}
      
      {/* Features Section */}
      {service.features && (
        <ServiceFeatures data={service.features} color={service.color} />
      )}
      
      {/* Process Section */}
      {service.process && (
        <ServiceProcess data={service.process} color={service.color} />
      )}
      
      {/* Stats Section */}
      {service.stats && (
        <ServiceStats data={service.stats} color={service.color} />
      )}
      
      {/* Success Stories Section */}
      {service.success && (
        <ServiceSuccess data={service.success} color={service.color} />
      )}
      
      {/* CTA Section */}
      <ServiceCTA data={service.cta} color={service.color} />
      
      {/* Browse by Category Section - Before Footer */}
      <ServiceSearchNav />
      
      {/* Footer */}
      <Footer />
    </motion.div>
  );
}
