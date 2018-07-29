import React from 'react';

export default () => (
    <footer style={styles.container}>
        <div style={styles.innerContainer}>
            prayinghearts@{new Date().getFullYear()}
        </div>
    </footer>
);

const styles = {
    container: {
        backgroundColor: '#EEE',
    },
    innerContainer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontStyle: 'italic',
        padding: 30
    }
};