import Link from "next/link";

const header = () => {
  return (
    <div className="headerSection">
        <Link href={"/home"}>Home</Link>
        <Link href={"/profile"}>Profile</Link>
        <Link href={"/"}>Logout</Link>
    </div>
  )
}

export default header