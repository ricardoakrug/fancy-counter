/* eslint-disable react/prop-types */
export default function Title({ locked }) {
  return (
    <h1 className="title">
      {locked ? <span>Limit reached</span> : "Fancy Counter"}
    </h1>
  );
}
