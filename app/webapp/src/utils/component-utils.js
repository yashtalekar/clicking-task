
export const shuffleComponents = (components) => (
    <>
        {components
            .sort(() => Math.random() - 0.5)
            .map((component, index) => (
                <div key={index}>{component}</div>
            ))}
    </>
);
