const Badge = () => {
  // for badge control purposes
  const badgeNumber = 2;

  return (
    <div>
      <p
        className={`px-1.5 rounded-full border-2 ${
          badgeNumber
            ? "text-yellow-500 border-yellow-500"
            : "text-gray-300 border-gray-300"
        }`}
      >
        {badgeNumber}
      </p>
    </div>
  );
};

export default Badge;
