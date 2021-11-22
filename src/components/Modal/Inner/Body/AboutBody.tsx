import React from 'react';

export const AboutBody: React.FC = () => {
	return (
		<>
			<h2 className="about-modal__title">My skills</h2>

			<div className="about-modal__skills">
				<div className="about-modal__skill">
					<div className="about-modal__progress yellow">
						<span className="about-modal__progress-left">
							<span className="about-modal__progress-bar" />
						</span>
						<span className="about-modal__progress-right">
							<span className="about-modal__progress-bar" />
			 			</span>
						<span className="about-modal__progress-value">90%</span>
					</div>
					<span className="about-modal__text">HTML/CSS</span>
				</div>

				<div className="about-modal__skill">
					<div className="about-modal__progress blue">
						<span className="about-modal__progress-left">
							<span className="about-modal__progress-bar" />
						</span>
						<span className="about-modal__progress-right">
							<span className="about-modal__progress-bar" />
			 			</span>
						<span className="about-modal__progress-value">90%</span>
					</div>
					<span className="about-modal__text">HTML/CSS</span>
				</div>

				<div className="about-modal__skill">
					<div className="about-modal__progress red">
						<span className="about-modal__progress-left">
							<span className="about-modal__progress-bar" />
						</span>
						<span className="about-modal__progress-right">
							<span className="about-modal__progress-bar" />
			 			</span>
						<span className="about-modal__progress-value">90%</span>
					</div>
					<span className="about-modal__text">HTML/CSS</span>
				</div>

				<div className="about-modal__skill">
					<div className="about-modal__progress green">
						<span className="about-modal__progress-left">
							<span className="about-modal__progress-bar" />
						</span>
						<span className="about-modal__progress-right">
							<span className="about-modal__progress-bar" />
			 			</span>
						<span className="about-modal__progress-value">90%</span>
					</div>
					<span className="about-modal__text">HTML/CSS</span>
				</div>
			</div>
		</>
	);
};