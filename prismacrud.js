import dev





// Delete customers 
const deleteUser = async (id) => {
    const user = await Prisma.user.delete({
        where: { id },
    });
    console.log("Deleted user:", user);
};
async function main() {
    await deleteUser(1);
}
main().catch(console.error).finally(() => Prisma.$disconnect());