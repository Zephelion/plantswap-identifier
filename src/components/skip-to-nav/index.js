export const SkipToNav = ({
    mainContentId = "home-link",
}) => {
    return (
        <a href={`#${mainContentId}`} id="skip-to-nav">
            <p>Go to navigation</p>
        </a>
    );
}