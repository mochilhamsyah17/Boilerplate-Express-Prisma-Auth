import prisma from "../prisma/client.js";

export const getUsers = async (req, res) => {
  try {
    if (req.user.role !== "user")
      return res.status(403).json({ message: "Forbidden" });

    const users = await prisma.user.findMany({
      select: {
        id: true,
        name: true,
        email: true,
        role: true,
      },
    });

    res.json(users);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};
