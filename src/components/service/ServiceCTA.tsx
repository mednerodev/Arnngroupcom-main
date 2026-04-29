import { ArrowRight, Sparkles } from "lucide-react";
import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { ServiceCTAData } from "../../types/service";

interface ServiceCTAProps {
  data: ServiceCTAData;
  color: string;
}

export function ServiceCTA({ data, color }: ServiceCTAProps) {
  return (
    <section className="srv-section" style={{ ["--srv-accent" as string]: color }}>
      <div className="srv-container">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="srv-panel srv-cta-grid"
        >
          <div>
            <div className="srv-chip">
              <Sparkles size={14} />
              <span>Next move</span>
            </div>
            <h2 className="srv-heading mt-5">{data.headline}</h2>
            <p className="srv-copy mt-5 max-w-[58ch]">{data.description}</p>
          </div>

          <div className="srv-cta-actions">
            <Link to="/contact" className="srv-button srv-button-primary">
              {data.buttonText}
              <ArrowRight size={18} />
            </Link>
            <a href="#service-categories" className="srv-button srv-button-secondary">
              Browse categories
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
