import { OrbitingCircles } from "./OrbitingCircles";

export function Frameworks() {
  const skills = [
    // AI/ML & Data Science
    "TensorFlow.png",
    "PyTorch.png",
    "Keras.png",
    "scikit-learn.png",
    "NumPy.png",
    "Pandas.png",
    "OpenCV.png",
    "Jupyter.png",
    "Matplotlib.png",
    "Streamlit.png",

    // MLOps / Data / Infra
    "Docker.png",
    "Kubernetes.png",
    "MongoDB.png",
    "MySQL.png",
    "Firebase.png",
  ];
  return (
    <div className="relative flex h-[15rem] w-full flex-col items-center justify-center">
      <OrbitingCircles iconSize={40}>
        {skills.map((skill, index) => (
          <Icon key={index} src={`assets/logos/${skill}`} />
        ))}
      </OrbitingCircles>
      <OrbitingCircles iconSize={25} radius={100} reverse speed={2}>
        {skills.reverse().map((skill, index) => (
          <Icon key={index} src={`assets/logos/${skill}`} />
        ))}
      </OrbitingCircles>
    </div>
  );
}

const Icon = ({ src }) => (
  <img src={src} className="duration-200 rounded-sm hover:scale-110" />
);
