import { useEffect, useState } from "react";

export default function WelcomeHeader() {
	const [isDone, setIsDone] = useState(false)
	const [isDone2, setIsDone2] = useState(false)
	const [isDone3, setIsDone3] = useState(false)

	useEffect(() => {
		const timer = setTimeout(() => setIsDone(true), 3000);
		const timer2 = setTimeout(() => setIsDone2(true), 6000);
		const timer3 = setTimeout(() => setIsDone3(true), 10000);

		return () => {
			clearTimeout(timer);
			clearTimeout(timer2);
			clearTimeout(timer3);
		  };
    }, []);

    return (
        <div className="welcome-header">
            <h1 className={`welcome-header__first ${isDone ? 'hide-border' : ''}`}>Hello! I'm Kiara</h1>
            <h1 className={`welcome-header__second ${isDone ? 'run' : ''} ${isDone2 ? 'hide-border' : ''}`}>Welcome to my website!</h1>
            <h1 className={`welcome-header__third ${isDone2 ? 'run' : ''}`}>Feel free to look around 👀</h1>
        </div>
    )
}