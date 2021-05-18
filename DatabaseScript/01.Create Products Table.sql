USE [Demo_DB]
GO
/****** Object:  Table [dbo].[Products]    Script Date: 18/05/2021 9:34:53 AM ******/
DROP TABLE IF EXISTS [dbo].[Products]
GO
/****** Object:  Table [dbo].[Products]    Script Date: 18/05/2021 9:34:53 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Products](
	[ID] [int] IDENTITY(1,1) NOT NULL,
	[ProductName] [nvarchar](50) NOT NULL,
	[Price] [decimal](18, 2) NOT NULL,
	[ProductImg] [nvarchar](max) NULL
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
SET IDENTITY_INSERT [dbo].[Products] ON 
GO
INSERT [dbo].[Products] ([ID], [ProductName], [Price], [ProductImg]) VALUES (1, N'Product_KFC', CAST(25.60 AS Decimal(18, 2)), NULL)
GO
INSERT [dbo].[Products] ([ID], [ProductName], [Price], [ProductImg]) VALUES (3, N'Product_B', CAST(18.30 AS Decimal(18, 2)), N'~/Img/Product_B.jpg')
GO
INSERT [dbo].[Products] ([ID], [ProductName], [Price], [ProductImg]) VALUES (4, N'Product_C', CAST(25.30 AS Decimal(18, 2)), NULL)
GO
SET IDENTITY_INSERT [dbo].[Products] OFF
GO
