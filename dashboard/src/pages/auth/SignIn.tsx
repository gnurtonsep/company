import { FormEvent, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button, Field, Input, Label } from "@headlessui/react";
import { twMerge } from "tailwind-merge";
import { IoIosEye, IoIosEyeOff } from "react-icons/io";

import LogoUrl from "@/assets/Logo.png";

const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            delayChildren: 0.4,
            staggerChildren: 0.2,
        },
    },
};

const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
    },
};

const SignIn = () => {
    /* ========== State ========== */
    const [isShowPassword, setIsShowPassword] = useState<boolean>(false);

    /* ========== Handle events ========== */
    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
    };

    return (
        <main className={twMerge("h-screen")}>
            <section className={twMerge("flex h-full overflow-hidden")}>
                <div
                    className={twMerge(
                        "flex-1 flex justify-center items-center p-4"
                    )}
                >
                    <motion.form
                        className={twMerge("w-full max-w-[360px]", "space-y-6")}
                        initial="hidden"
                        whileInView="visible"
                        variants={container}
                        onSubmit={handleSubmit}
                    >
                        <motion.div
                            className="flex justify-center md:justify-start"
                            variants={item}
                        >
                            <img
                                className={twMerge("w-28 h-auto object-cover")}
                                src={LogoUrl}
                                alt="Logo Url"
                            />
                        </motion.div>
                        <div className={twMerge("space-y-2")}>
                            <motion.h2
                                className={twMerge(
                                    "first-letter:uppercase",
                                    "text-3xl font-bold",
                                    "text-center md:text-left",
                                    "text-gray-900"
                                )}
                                variants={item}
                            >
                                chào mừng trở lại
                            </motion.h2>
                            <motion.p
                                className={twMerge(
                                    "first-letter:uppercase",
                                    "text-center md:text-left",
                                    "font-medium"
                                )}
                                variants={item}
                            >
                                hãy nhập thông tin của bạn.
                            </motion.p>
                        </div>
                        <div className={twMerge("space-y-4")}>
                            <motion.div variants={item}>
                                <Field className={twMerge("space-y-1")}>
                                    <Label
                                        className={twMerge(
                                            "first-letter:uppercase inline-block",
                                            "text-sm/6 font-medium"
                                        )}
                                    >
                                        email
                                    </Label>
                                    <Input
                                        className={twMerge(
                                            "block w-full rounded-lg border border-gray-400/50 py-1.5 px-3 text-sm/6",
                                            "focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-gray-400/50"
                                        )}
                                    />
                                </Field>
                            </motion.div>
                            <motion.div variants={item}>
                                <Field className={twMerge("space-y-1")}>
                                    <Label
                                        className={twMerge(
                                            "first-letter:uppercase inline-block",
                                            "text-sm/6 font-medium"
                                        )}
                                    >
                                        mật khẩu
                                    </Label>
                                    <div className="relative">
                                        <Input
                                            className={twMerge(
                                                "block w-full rounded-lg border border-gray-400/50 py-1.5 px-3 text-sm/6",
                                                "focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-gray-400/50"
                                            )}
                                            type={
                                                isShowPassword
                                                    ? undefined
                                                    : "password"
                                            }
                                        />
                                        <button
                                            type="button"
                                            className={twMerge(
                                                "absolute top-1/2 right-3 -translate-y-1/2"
                                            )}
                                            onClick={() =>
                                                setIsShowPassword(
                                                    (prev) => !prev
                                                )
                                            }
                                        >
                                            {isShowPassword ? (
                                                <IoIosEyeOff />
                                            ) : (
                                                <IoIosEye />
                                            )}
                                        </button>
                                    </div>
                                </Field>
                            </motion.div>
                            <motion.div
                                className={twMerge("flex justify-end")}
                                variants={item}
                            >
                                <Link
                                    to="/auth/forgot-password"
                                    className={twMerge(
                                        "first-letter:uppercase",
                                        "text-xs font-medium",
                                        "hover:underline hover:text-gray-800",
                                        "transition-all"
                                    )}
                                >
                                    quên mật khẩu?
                                </Link>
                            </motion.div>
                            <motion.div variants={item}>
                                <Button
                                    type="submit"
                                    className={twMerge(
                                        "inline-flex justify-center items-center gap-2 w-full",
                                        "py-2 px-4 rounded-2xl",
                                        "bg-gray-800 hover:bg-gray-800/90 text-white data-[active]:scale-[0.99]"
                                    )}
                                >
                                    <span className="first-letter:uppercase font-semibold">
                                        đăng nhập
                                    </span>
                                </Button>
                            </motion.div>
                        </div>
                    </motion.form>
                </div>
                <motion.div
                    className={twMerge("flex-1 hidden md:flex")}
                    initial={{
                        opacity: 0,
                        scale: 0.5,
                    }}
                    whileInView={{
                        opacity: 1,
                        scale: 1,
                    }}
                    transition={{
                        type: "spring",
                        damping: 10,
                    }}
                >
                    <div className={twMerge("w-full h-full")}>
                        <img
                            className="w-full h-full object-cover"
                            src="https://images.unsplash.com/photo-1548515347-be37cd712ff8?q=80&w=1933&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt="SignIn Thumbnail"
                        />
                    </div>
                </motion.div>
            </section>
        </main>
    );
};

export default SignIn;
