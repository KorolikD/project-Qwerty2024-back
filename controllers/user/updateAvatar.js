const { nanoid } = require("nanoid");
const { HttpError } = require("../../helpers");
const path = require("path");
const cloudinary = require("cloudinary").v2;

const updateAvatar = async (req, res) => {
  const { file, user } = req;

  if (!file) {
    throw HttpError(400, "File not found");
  }

  const uniqueFilename = nanoid();

  const fileName = `${uniqueFilename}`;

  const result = await cloudinary.uploader.upload(file.path, {
    public_id: `${fileName}`,
    folder: "avatars",
    use_filename: true,
    unique_filename: false,
    overwrite: true,
  });
  console.log(file.filename);
  await cloudinary.uploader.destroy(file.filename);

  const avatarURL = result.secure_url;
  user.avatarURL = avatarURL;

  await user.save();

  res.json({ avatarURL: avatarURL });
};

module.exports = updateAvatar;
