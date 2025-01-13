const { ComputeModule } = require("@palantir/compute-module");

const myModule = new ComputeModule({
    logger: console,
});

myModule
    .register("sum", async ({a, b}) => String(a + b))
    .register("hello", async ({name}) => `Hello, ${name}!`)
    .register("getEnv", async ({ 
        excludeUnnecessaryKeys = ['SES_', 'KUBERNETES_'],
        groupByKeys = ['_URI', '_PATH', '_PEM_PATH', '_PORT', '_HOST', '_API']
    } = {}) => {
        // First filter out excluded prefixes and create initial groupings
        const groupedEnv = Object.entries(process.env).reduce((acc, [key, value]) => {
            if (excludeUnnecessaryKeys.some(prefix => key.startsWith(prefix))) {
                return acc;
            }

            const matchingPattern = groupByKeys.find(pattern => key.endsWith(pattern));
            
            // Determine which group this key belongs to
            const groupKey = matchingPattern || 'other';
            
            // Initialize group if it doesn't exist
            if (!acc[groupKey]) {
                acc[groupKey] = {};
            }
            
            // Add the key-value pair to the appropriate group
            acc[groupKey][key] = value;
            
            return acc;
        }, {});

        // Return the grouped environment variables
        return groupedEnv;
    });
