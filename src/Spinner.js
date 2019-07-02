import React from 'react';
import { Loader, Dimmer } from 'semantic-ui-react';

const Spinner = () => (
    <Dimmer active> {/*This will provide a dark background to our Loader */}
        <Loader 
            size="huge"
            content={"Preparing Chat ..."} 
        />
    </Dimmer>
);

export default Spinner;
