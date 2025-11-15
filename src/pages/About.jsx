function About({ dark }) {
  return (
    <div className="w-full p-5 flex flex-col justify-center items-center gap-3">
      <span
        className={dark ? "text-neutral-500 font-mono" : "text-neutral-500"}
      >
        Developers:
      </span>
      <div
        className={`flex flex-col text-neutral-700 ${
          dark ? "bg-black border border-neutral-700" : "bg-neutral-300"
        } p-5 rounded-md relative`}
      >
        <span className="text-shadow-2xs font-bold bg-linear-to-r from-red-500 to-green-500 bg-clip-text text-transparent">
          Arastoo
        </span>
        <span className="text-shadow-2xs font-bold bg-linear-to-r from-[#6DFF92] to-[#DBFF6D] bg-clip-text text-transparent">
          Mani N
        </span>
        <span className="text-shadow-2xs font-bold bg-linear-to-r from-[#FF926D] to-[#FF6DDB] bg-clip-text text-transparent">
          XSilverTH
        </span>
        <span className="text-shadow-2xs font-bold bg-linear-to-r from-[#926DFF] to-[#6DDBFF] bg-clip-text text-transparent">
          Mehrad
        </span>
      </div>
    </div>
  );
}
export default About;
