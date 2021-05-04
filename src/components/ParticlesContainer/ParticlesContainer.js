import React from 'react';
import Particles from 'react-particles-js';

const ParticlesContainer = () => {
    return (
        <div>
            <Particles
                params={{
                    particles: {
                        number: {
                            value: 30,
                            density: {
                                enable: true,
                                value_area: 900
                            }
                        }
                    }
                }}
            />
        </div>
    );
};

export default ParticlesContainer;