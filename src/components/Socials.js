const Socials = ({ githubUrl, linkedinUrl }) => {
    const styles = {
        icon: {
            textDecoration: "none",
            fontSize: "40px",
            padding: "5px",
            transition: "0.3s ease-in",

        },
    };

    return (
        <div className="socialIcons" style={styles.socialIcons}>
            {/*Github and LinkedIn Icons and Styling */}
            <a className="icon" style={styles.icon} href={githubUrl}>
                <i className="fa-brands fa-github" aria-hidden="true" title="GitHub Profile"></i>
            </a>
            <a className="icon" style={styles.icon} href={linkedinUrl}>
                <i className="fa-brands fa-linkedin" aria-hidden="true" title="LinkedIn Profile"></i>
            </a>
        </div>
    );
};

export default Socials;
