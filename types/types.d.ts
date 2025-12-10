export type SupportedLanguages = "en" | "ko";

export type ProductMeta = {
  id: number;
  name: string;
  navigation_label: string;
  path: string;
  is_recommended: boolean;
  cover_image_url: string | null;
  children: ProductMeta[];
};

/**
 * Supabase Storage 버킷 내 파일 및 이미지 메타
 * path : 버킷 내 경로
 * url : 외부에서 접근 가능한 URL (public URL)
 */
export type BucketFileMeta = {
  path: string;
  url: string;
  name: string;
}

export type Product = {
  id: number;
  created_at: string;
  name: string;
  published_at: string;
  description: string;
  detail_file_url: string | null;
  detail_image_url: string | null;
  cover_image_url: string | null;
  path: string;
  locale: SupportedLanguages;
  position: number;
  is_published: boolean;
  is_recommended: boolean;
  navigation_label: string;
};

export type BoardCategory = "blog" | "notice" | "contact" | "technical-resource";

export type Content = {
  plain_text: string;
  object: object;
}

export type BoardTitle = Partial<
  Record<SupportedLanguages, string>
>;

export type BoardContent = Partial<
  Record<SupportedLanguages, Content>
>;

export type BoardImagePaths = Partial<Record<string, BucketFileMeta[]>>;

export type UserMetaData = {
  name: string;
}

export type BoardResponseDto = {
  id: number;
  category: BoardCategory;

  author_name: string;
  author_email: string;
  phone_number: string;
  company_name: string;

  created_at: string;
  last_modified_at: string;
  published_at: string;

  is_published: boolean;

  title: BoardTitle;
  content: BoardContent;
  image_paths: BoardImagePaths;
};

export type BoardCreateDto = {
  category?: BoardCategory;
  author_name?: string;
  author_email?: string;
  phone_number?: string;
  company_name?: string;

  title?: BoardTitle;
  content?: BoardContent;
  image_paths?: BoardImagePaths;

  is_published?: boolean;
  published_at?: string;
};

export type BoardUpdateDto = {
  id: number;
  category?: BoardCategory;
  author_name?: string;
  author_email?: string;
  phone_number?: string;
  company_name?: string;

  title?: BoardTitle;
  content?: BoardContent;
  image_paths?: BoardImagePaths;

  is_published?: boolean;
  published_at?: string;
};


export type BoardMeta = {
  id: number;
  title: BoardTitle;
  author_name: string;
  author_email: string;
  phone_number: string;
  company_name: string;
  created_at: string;
  last_modified_at: string;
  category: BoardCategory;
  is_published: boolean;
  published_at: string;
  image_paths: BoardImagePaths;
};


export type BoardUpdateDto = Partial<BoardCreateDto>;