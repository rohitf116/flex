import * as Yup from "yup";

/*
@IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsNotEmpty()
  excerpt: string;

  @IsString()
  @IsNotEmpty()
  // @Matches(/^(?=(?:\D*\d){10}(?:(?:\D*\d){3})?$)[\d-]+$/, {
  //   message: 'Invalid ISBN format',
  // })
  ISBN: string;

  @IsString()
  @IsOptional()
  image: string;
  // @ApiProperty({ type: 'string', format: 'binary' }) // This is important for Swagger documentation

  @IsString()
  @IsNotEmpty()
  category: string;

  // @IsArray()
  @IsString()
  subcategories: string; // Assuming subcategories are represented by their IDs

  @IsDateString()
  releasedAt: string;
 */
export const bookCreateSchema = Yup.object({
  title: Yup.string()
    .required("title is required")
    .min(5, "title must be minimum 5 characters"),
  excerpt: Yup.string()
    .required("excerpt is required")
    .min(5, "excerpt must be minimum 30 characters"),

  ISBN: Yup.string(),
  //.matches(
  //     /^(?=(?:\D*\d){10}(?:(?:\D*\d){3})?$)[\d-]+$/,
  //     "Must be valid ISBN"
  //   ),
  category: Yup.string().required("category is required"),
  subcategories: Yup.string(),
  releasedAt: Yup.string("releasedAt is required"),
});
