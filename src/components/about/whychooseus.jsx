// CoreFlow.js
import React from "react";

const steps = [
  { title: "Customer Focus", icon: "👥" },
  { title: "Passion for Excellence", icon: "🏆" },
  { title: "Working Together", icon: "🤝" },
  { title: "Innovation", icon: "💡" },
  { title: "Continuous Improvement", icon: "📈" },
  { title: "Learning Agility", icon: "📝" },
];

export default function CoreFlow() {
  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Core Competencies</h2>
      <div style={styles.flowWrapper}>
        {steps.map((step, index) => (
          <div key={index} style={styles.stepContainer}>
            <div style={styles.circle}>{step.icon}</div>
            <p style={styles.label}>{step.title}</p>
            {index !== steps.length - 1 && <div style={styles.connector}></div>}
          </div>
        ))}
        <div style={styles.connector} />
      </div>
    </div>
  );
}

const styles = {
  container: {
    padding: "40px 20px",
    textAlign: "center",
  },
  title: {
    fontSize: "28px",
    fontWeight: "bold",
    marginBottom: "40px",
  },
  flowWrapper: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "30px",
    maxWidth: "1000px",
    margin: "0 auto",
  },
  stepContainer: {
    position: "relative",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    flex: "1 1 150px",
    minWidth: "140px",
  },
  circle: {
    width: "80px",
    height: "80px",
    borderRadius: "50%",
    backgroundColor: "#e8f0fe",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "32px",
    marginBottom: "10px",
  },
  label: {
    fontSize: "16px",
    fontWeight: "500",
    maxWidth: "120px",
  },
  connector: {
    position: "absolute",
    top: "40px",
    left: "100%",
    width: "30px",
    height: "2px",
    backgroundColor: "#ccc",
  },
};