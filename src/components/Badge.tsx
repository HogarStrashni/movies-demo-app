const Badge = () => {
  // for badge control purposes
  const badgeNumber = 2;

  return (
    <div>
      <p
        className={`px-1.5 rounded-full ring-2 ${
          badgeNumber
            ? "text-yellow-500 ring-yellow-500"
            : "text-gray-300 ring-gray-300"
        }`}
      >
        {badgeNumber}
      </p>
    </div>
  );
};

export default Badge;
