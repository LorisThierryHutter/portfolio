import React, { useState } from "react";
import { useTranslation } from "../../i18n";
// import ProjectModal from "./ProjectModal";
// import projectsData from "../../data/projectsData.json";

// import HeroSection from './HeroSection/HeroSection';
// import SkillsSection from './SkillsSection/SkillsSection';
// import FeaturedProjects from './FeaturedProjects/FeaturedProjects';

const Home = () => {
    const { t } = useTranslation();
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [selectedProject, setSelectedProject] = useState(null);

    const handleOpenModal = (project) => {
      setSelectedProject(project);
      setModalIsOpen(true);
    };

    const handleCloseModal = () => {
      setSelectedProject(null);
      setModalIsOpen(false);
    };

    return (
        <div className="container">
            <h1 className="title">{t("home.title")}</h1>
            <p className="description">{t("home.description")}</p>
            <img
                src="https://via.placeholder.com/1200x400"
                alt="Hero"
                className="hero-thumbnail"
            />
            {/*
            <div className="projects">
                {projectsData.map((project) => (
                    <div
                        key={project.id}
                        className="project"
                        onClick={() => handleOpenModal(project)}
                    >
                        <img
                            src={project.thumbnail}
                            alt={project.title}
                            className="project-thumbnail"
                        />
                        <div className="project-overlay">
                            <h3 className="project-title">{project.title}</h3>
                            <p className="project-subtitle">{project.subtitle}</p>
                            <button className="project-link">
                                {t("home.viewProject")}
                            </button>
                        </div>
                    </div>
                ))}
            </div>
            {modalIsOpen && (
                <ProjectModal
                    project={selectedProject}
                    closeModal={handleCloseModal}
                />
            )}
        */ }
        </div>
    );
};

export default Home;
