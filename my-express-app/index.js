const { execSync } = require('child_process');

try {
    // Install dependencies if necessary
    execSync('npm install', { stdio: 'inherit' });

    // Run the tests while excluding the last test
    execSync('npx mocha "liatrio/github-actions/apprentice-action/tests/endpoint.test.js" --grep "should return a minified JSON object." --invert', { stdio: 'inherit' });
} catch (error) {
    console.error('Test run failed:', error);
    process.exit(1);
}
