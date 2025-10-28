/*
  Warnings:

  - You are about to drop the `Product` table. If the table is not empty, all the data it contains will be lost.

*/
BEGIN TRY

BEGIN TRAN;

-- DropTable
DROP TABLE [dbo].[Product];

-- CreateTable
CREATE TABLE [dbo].[Products_Table] (
    [productID] NVARCHAR(1000) NOT NULL,
    [productName] NVARCHAR(1000) NOT NULL,
    [productDescription] NVARCHAR(1000) NOT NULL,
    [unitsLeft] INT NOT NULL,
    [isDeleted] BIT NOT NULL CONSTRAINT [Products_Table_isDeleted_df] DEFAULT 0,
    [createdAt] DATETIME2 NOT NULL CONSTRAINT [Products_Table_createdAt_df] DEFAULT CURRENT_TIMESTAMP,
    [updatedAt] DATETIME2 NOT NULL,
    CONSTRAINT [Products_Table_pkey] PRIMARY KEY CLUSTERED ([productID])
);

COMMIT TRAN;

END TRY
BEGIN CATCH

IF @@TRANCOUNT > 0
BEGIN
    ROLLBACK TRAN;
END;
THROW

END CATCH
